const getServerStuff = (callback) => ajaxCall((json) => callback(json));
const getServerStuff = ajaxCall.bind(ajaxCall);

//函数一等公民
ajaxCall((json) => callback(json));
ajaxCall(callback);

// const BlogController = {
//     index(posts) { return Views.index(posts); },
//     show(post) { return Views.show(post); },
//     create(attrs) { return Db.create(attrs); },
//     update(post, attrs) { return Db.update(post, attrs); },
//     destroy(post) { return Db.destroy(post); },
// };

// const BlogController = {
//     index: Views.index,
//     show: Views.show,
//     create: Db.create,
//     update: Db.update,
//     destroy: Db.destroy,
//   };
