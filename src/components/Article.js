import React from "react";

export default function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {/* <p dangerouslySetInnerHTML={{ __html: post.html }} /> */}

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{
          __html: post.html
            .replace(/src/gi, "data-src")
            .replace(/gatsby-resp-image-image/gi, "lazyload")
        }}
      />
    </div>
  );
}
