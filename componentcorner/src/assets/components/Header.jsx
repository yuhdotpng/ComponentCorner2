import './Header.css'

function Header({name, page1, page2, page3}) {
    return (
        <div className="header">
            <a href="#default"><h2>{name}</h2></a>
            <div className="header-right">
                <a className="active" href="#home">{page1}</a>
                <a href="#contact">{page2}</a>
                <a href="#about">{page3}</a>
            </div>
        </div>
    );
}
export default Header;