import React from "react";

function RenderingList() {
    const booklist = [
        {
            title: 'To kill a mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The great gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'The catcher in the rye',
            author: 'J.D. Salinger',
            pages: 234
        }
    ];

    return (
        <div>
            { booklist.map(book => (
                <h2 key={book.title}>{book.title}</h2>
            )) }

            <hr />

            { booklist.map(book => {
                return (
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderingList;