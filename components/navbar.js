import Link from "next/link";

const Navbar = () =>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link active" href="/blog">
                        Blog
                    </Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link active" href="/github">
                        Github
                    </Link>
                </li>

            </ul>
            </div>
        </div>
    </nav>

export default Navbar;