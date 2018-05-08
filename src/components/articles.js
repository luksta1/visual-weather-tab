import React from 'react'

const slider = () => {
    let current = 0,
        slides = document.getElementsByClassName('article')

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
        slides[current].style.opacity = 1;
    }, 10000);
}

const Articles = (props) => (
    <div onLoad={slider()} className="article-wrapper">
        {props.articles.map(article => {
            return (
                <div key={article.publushedAt} className="article">
                    <a href={article.url}><h4>{article.title}</h4></a>
                    <h6>{article.source.name}</h6>
                </div>
            )
        })}
    </div>
);

export default Articles;