export let Validiation = (email, password) => {

    let useremail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    let userpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!useremail) return "Email ID, not Valid";
    if (!userpassword) return "Password is not Valid";
    return null;
}