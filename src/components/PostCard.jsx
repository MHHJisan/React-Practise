export const Postcard = (props) => {


  const title = "This is a title";
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ducimus quidem assumenda odit voluptatibus cupiditate nesciunt illum, minima cum numquam optio harum debitis earum, culpa fugiat. Architecto praesentium voluptatibus enim... "
  const id = 1

  if (!props.post) {
    return <p>Post Details Not Found</p>
  }
  return (
    <div className="post-card">
      <h1>{props.post.title}</h1>
      <p>{props.post.description}<a href={props.post.id}>Read more</a> </p>
    </div>
  )

}