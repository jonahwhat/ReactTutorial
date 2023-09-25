import Profile from "./Profile";



function Footer() {
    



    return (
        <>
            <div className="footer">
                <Profile profilePicture={"https://i.imgur.com/QcH5Jfy.jpg"} username={"username"}></Profile>
                <Profile profilePicture={"https://i.imgur.com/AvZW3w9.png"} username={"jonah"}></Profile>
                <Profile profilePicture={"https://i.imgur.com/RTzYAh7.png"} username={"test123"}></Profile>

            </div>
        
        </>
    )
}

export default Footer;