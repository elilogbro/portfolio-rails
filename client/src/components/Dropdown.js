function Dropdown() {

    return (
        <div className="dropdown">
            <ul>
                <li name="view">View</li>
                <a
                    href={'/resume.pdf'}
                    download="EliottBrownResume"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    <li>Download</li>
                </a>
            </ul>
        </div>
    )
}

export default Dropdown;