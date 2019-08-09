import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest React",
        author: "Arnold B",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus omnis tenetur, officia deleniti voluptate fugit tempore unde velit dignissimos laboriosam, alias ipsa error vel nihil nemo accusantium impedit, itaque magnam!'
    },
    {
        id: 2,
        title: "Czy warto uczyć sie React ?",
        author: "dziadek Arnolda B",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus omnis tenetur, officia deleniti voluptate fugit tempore unde velit dignissimos laboriosam, alias ipsa error vel nihil nemo accusantium impedit, itaque magnam!'
    },
    {
        id: 3,
        title: "Czy warto ...? ",
        author: "pra pra dziadek Arnolda B",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus omnis tenetur, officia deleniti voluptate fugit tempore unde velit dignissimos laboriosam, alias ipsa error vel nihil nemo accusantium impedit, itaque magnam!'
    }
]
const HomePage = () => {
    const articleList = articles.map(article =>(
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="home">
            {articleList}
        </div>
    );
}

export default HomePage;