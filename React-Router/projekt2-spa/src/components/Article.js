import React from 'react';

const Article = (props) => {
    const styles={
        marginTop:"40px"
    }
    return (
    <article style={styles}>
        <h3 style={{
            marginBottom:3,
            textTransform:'uppercase'
        }}>{props.title}</h3>
        <span style={{
            display:'block',
            marginBottom:10,
            fontSize: '12px'
        }}>{props.author}</span>
        <p style ={{fontSize:'16px'}}>{props.text}</p>
    </article>
    );
}

export default Article;