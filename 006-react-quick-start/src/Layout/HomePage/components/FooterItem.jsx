import React from 'react';
let now = new Date();
const FooterItem = () => {
    return (
        <div>
            <p className="m-3"> &copy; Авторсике права мои {now.getFullYear()}</p>
        </div>
    );
}

export default FooterItem;