






const createStore = (reducer, initState, rewritesStoreFunc) => {

    if (rewritesStoreFunc) {
        const newCreateStore = rewritesStoreFunc(createStore);
        return newCreateStore(reducer, initState);
    }
    let state = initState;
    let listeners = [];
    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }
    function getState() {
        return state;
    }

    dispatch({ type: Symbol() });
    return {
        subscribe,
        dispatch,
        getState
    }
}



let counterState = {
    //计数器
    counter: {
        count: 0
    },
}

let infoState = {
    //基本信息
    info: {
        name: '一灯',
        description: '我们都是前端'
    }
}


let initState = {
    // counter: {
    //     count: 0
    // },
    //基本信息
    info: {
        name: '一灯',
        description: '我们都是前端'
    }
}



function counterReducer(state, action) {
    if (!state) {
        state = counterState
    }
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}


function InfoReducer(state, action) {
    if (!state) {
        state = infoState
    }
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            }
        default:
            return state;
    }
}

//1. 定计划
//2.发送计划


function combineReducer(reducers) {
    const reducerKeys = Object.keys(reducers);
    return function combination(state, action) {
        const nextState = {};

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const prevStateForKey = state[key];
            const nextStateForKey = reducer(prevStateForKey, action);
            nextState[key] = nextStateForKey
        }
        return nextState
    }
}

const reducer = combineReducer({
    count: counterReducer,
    info: InfoReducer
})



// const next = store.dispatch;


//loggerMiddleWare.js
const loggerMiddleWare = (store) => (next) => (action) => {
    console.log('修改前', store.getState())
    console.log(action.type);
    next(action);
    console.log('修改后', store.getState())
}

/**
 *
 *
 * function a(next){
 *  return  function (action){
 *      next(action);
 *  }
 * }
 */

// //记录修改异常  exceptionMiddleWare.js
const exceptionMiddleWare = (store) => (next) => (action) => {
    // setTimeout(()=>{
    //     next(action)
    // },3000)
    try {
        next(action);//
    } catch (err) {
        console.log(err)
    }
}

//createStore==》store
//import loggerMiddleWare from '...'


// const logger = loggerMiddleWare(store);
// const exception = exceptionMiddleWare(store);

// [logger,exception]

// const store=createStore();

const rewritesStoreFunc = applyMiddleware(loggerMiddleWare, exceptionMiddleWare)




function compose(...funcs) {
    if (funcs.length == 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

//compose
// const store = newCreateStore(reducer);
const applyMiddleware = (...middlewares) => {
    return function rewritesStoreFunc(oldCreateStore) {
        return function newCreateStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState);

            const chain = middlewares.map((middleware) => {
                return middleware(store)
            });
            let dispatch = store.dispatch;

            chain.reverse().map((middleware) => {
                dispatch = middleware(dispatch)
            })

            //store.dispatch = exception(logger(next)); //一层
            store.dispatch = dispatch;
            return store;
        }
    }
}

let store = createStore(reducer, initState, rewritesStoreFunc);

store.subscribe(() => {
    let state = store.getState();
    console.log(state.info.name, state.info.description);
});




//loggerMiddleWare(exceptionMiddleWare)
// store.dispatch = exception(logger(next)); //一层

//独立中间件




////在修改state ，记录日志修改前的state | 什么action  记录修改异常

// store.dispatch = (action) => {
//     try{
//         // ....
//         // ....
//         // ....
//         // ....
//         // ....
//         // ....
//         // ....

//         console.log('修改前', store.getState())
//         console.log(action.type);
//         next(action);
//         console.log('修改后', store.getState())
//         // ....
//         // ....
//         // ....
//         // ....
//     }catch (err) {
//         console.log(err)
//     }

// }


//动态扩展dispatch






/*自增*/
store.dispatch({
    type: 'INCREMENT'
});

/*修改 name*/
store.dispatch({
    type: 'SET_NAME',
    name: '一灯牛逼'
});




//redux-promise
//
// const asyncMiddle = (store) => (next) => (action) => {
//     next({ type: 'Loading', payload: val })//
//     promise.then((val) => {
//         next({ type: 'setName', payload: val })
//     })
// }
// redux-promise   redux-thunk

// saga  yield  协程  mobx  vue3 reactive






