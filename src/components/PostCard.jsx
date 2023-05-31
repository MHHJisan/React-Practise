export const Postcard = (props) => {


  const title = "This is a title";
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ducimus quidem assumenda odit voluptatibus cupiditate nesciunt illum, minima cum numquam optio harum debitis earum, culpa fugiat. Architecto praesentium voluptatibus enim... "
  const id = 1

  // if (!props.post) {
  //   return <div>
  //     <h1>{title}</h1>
  //     <p>{description}</p>
  //   </div>
  // }

  return (
    <div className="post-card">
      <h1>{props.post ? props.post.title : title}</h1>
      {/* <p>{props.post && props.post.description ? props.post.description : description}<a href={`pages/post/${props.post ? props.post.id : id}`}>Read more</a> </p> */}
      <p>{props?.post?.description ?? description}<a href={`pages/post/${props.post ? props.post.id : id}`}>Read more</a> </p>

    </div >
  )

}