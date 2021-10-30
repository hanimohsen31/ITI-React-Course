import { useHistory } from "react-router-dom";
// import { Input } from "../components/Input";

export const ContactUs = () => {

    const history = useHistory();
    const handleSubmit = () => {
        history.replace("/posts");

      };

    return (
        <>
        <form className="container" onSubmit={handleSubmit}>

            <div class="mb-3">
                <label for="textarea" class="form-label">Write Yor Question Here</label>
                <textarea id="textarea" class="form-control" aria-label="With textarea" ></textarea>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div> 

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
        </>
    )
}