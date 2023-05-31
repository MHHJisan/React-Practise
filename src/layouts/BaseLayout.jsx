export const BaseLayout = (props) => {
    return (
        <>
            <header>
                <a href="/">TechRA</a>
                <a href="../pages/About"> About</a>
                <a href="./pages/Contact">Contact</a>
            </header>
            <main>
                {props.children}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate exercitationem enim, dolorem ipsum, mollitia nulla in architecto odio doloribus voluptatum temporibus accusamus deserunt labore velit libero officia eum fuga!git</p>
            </main>
        </>
    )
}