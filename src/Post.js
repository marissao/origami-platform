const Post = ({allPostsData}) => {
    return (  
    allPostsData.map((onePost) => (
        <div className="Post">
            <img src="blue-origami-bird.png" alt="white-origami-bird" key={onePost}/>
            <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis nulla sit amet lorem egestas hendrerit eu eu lectus. Vestibulum ornare sed velit quis iaculis. Sed metus eros, interdum vitae urna a, hendrerit sollicitudin justo. Etiam luctus nec mauris sit amet auctor. Nullam ac posuere ligula. Praesent nec sagittis ante. Proin dignissim egestas nunc auctor facilisis. Quisque ornare nulla nec nulla condimentum mollis. Morbi nunc augue, dapibus in risus vel, tincidunt suscipit nisi. Phasellus lobortis bibendum odio id lobortis. Nulla condimentum suscipit purus quis pulvinar. Curabitur ornare neque non auctor venenatis. Nulla turpis eros, consequat sit amet augue vitae, maximus varius est. Proin vitae lectus vel lectus aliquet venenatis.
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    Some Anonymous
                </span>
            </div>
        </div> 
    )));
}
 
export default Post;