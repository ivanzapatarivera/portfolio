
function profilePicture() {

    const proObj =
    {
        "tag": "img",
        "className": "profile",
        "id": "profileImage",
        "src": "/assets/images/profile.png",
        "alt": "profile picture"
    }
        
    
    const imgAttrs = proObj
    const imgLoc = document.getElementById('profilePicture');
    
    const img = document.createElement(imgAttrs.tag);
    img.className = (imgAttrs.className);
    img.id = (imgAttrs.id);
    img.src = (imgAttrs.src);
    img.alt = (imgAttrs.alt);
    imgLoc.prepend(img);

}

export { profilePicture }