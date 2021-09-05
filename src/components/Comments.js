export default function Comments({ comments = []}) {
    return (
        <>
        <h2 className="cursive mt-10 mb-4 text-2xl lg:text-4xl leading-tight">Comments:</h2>
        <ul>
            {comments?.map(({ _id, _createdAt, name, email, comment}) => (
                <li key={_id} className="mb-5">
                    <hr className="mb-5"/>
                    <h4 className="mb-2 leading-tight text-red-800">
                        <a href={`mailto:${email}`}>{name}</a>
                    </h4>
                    <p className="text-xs">{comment}</p>
                    <hr className="mt-5 mb-5"/>
                </li>
            ))}
        </ul>
        </>
    )
}
