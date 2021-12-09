














return (
<form>!!!!display comments here and write comments below the displayed comments!!!!
<h2 className="comments_form">New Comment</h2>
    <div className="form-group">
        <label htmlFor="employeeName">Comment></label>
        <input id="name" onChange={handleUserInput}
            type="text"
            required
            autoFocus
            className="form-control"
            placeholder="Your Comment Here"
        />
    </div>
</form>
)