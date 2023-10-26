import AppLayout from "../layouts/AppLayout";
import React from 'react';

const Dashboard = (props) => {

  // useEffect(() => {
  //
  //   (async() => {
  //     try {
  //       const post = await getPost(1);
  //       setPost(post.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })();
  //
  //   (async() => {
  //     try {
  //       const posts = await fetchPosts();
  //       setPosts(posts.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })();
  //
  // }, []);


  return (
    <AppLayout title="Welcome To React JS 🚀">

      <div className="container">

        <div className="row mt-40">

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Routing
              </a>
              <a href="#" className="list-group-item list-group-item-action">Using React router</a>
              <a href="#" className="list-group-item list-group-item-action">Using page Layouts</a>
            </div>
          </div>

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Security
              </a>
              <a href="#" className="list-group-item list-group-item-action">Authorization</a>
              <a href="#" className="list-group-item list-group-item-action">Authentication</a>
            </div>
          </div>

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Chart
              </a>
              <a href="#" className="list-group-item list-group-item-action">Using Google Chart</a>
            </div>
          </div>
        </div>
        <div className="row mt-40">

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Forms
              </a>
              <a href="#" className="list-group-item list-group-item-action">Handling different inputs</a>
              <a href="#" className="list-group-item list-group-item-action">Form validation</a>
              <a href="#" className="list-group-item list-group-item-action">File uploads</a>
            </div>
          </div>

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Security
              </a>
              <a href="#" className="list-group-item list-group-item-action">Authorization</a>
              <a href="#" className="list-group-item list-group-item-action">Authentication</a>
            </div>
          </div>

          <div className="col-4">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-light">
                Chart
              </a>
              <a href="#" className="list-group-item list-group-item-action">Using Google Chart</a>
            </div>
          </div>
        </div>
      </div>

    </AppLayout>
  )
}

export default Dashboard
