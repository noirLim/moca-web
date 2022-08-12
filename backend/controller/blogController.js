const Blog = require("../model/Blog");

const displayBlog = async (req, res) => {
  try {
    await Blog.find()
      .select({ title: 1, desc: 1 })
      .then((Result) => {
        res.status(200).json(Result);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const displaySelectedBlog = async (req, res) => {
  try {
    await Blog.findById(req.params.id)
      .select({ _id: 1, post: 1 })
      .then((Result) => {
        res.status(200).json(Result);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const addBlog = async (req, res) => {
  const { title, desc, image, time, post } = req.body;

  try {
    const blog = new Blog({
      title,
      desc,
      image,
      time,
      post,
    });
    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, desc, image, time, post } = req.body;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(id, {
      title,
      desc,
      image,
      time,
      post,
    });
    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBlog = addBlog;
exports.displayBlog = displayBlog;
exports.displaySelectedBlog = displaySelectedBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
