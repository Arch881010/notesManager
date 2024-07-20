// If for some god forksaken reason someone gets PAST THE AUTHKEY, SEND THEM BACK WHERE THEY BELONG

(() => {
    if (Cookies.get("authkey") == null || Cookies.get("authkey") == "" || !Cookies.get("authkey")) {
        return window.location.href = "/login";
    }
});