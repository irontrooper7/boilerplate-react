import Header from './layout/Header.js'
import HeroScroll from "./sections/Hero-Scroll.js"
import HeroBackgroundChange from "./sections/HeroBackgroundChange.js";

const Main = () => {
    return (
        <main>
            <Header />
            <HeroScroll
                title="Lorem Ipsum Dolor"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac nunc sed sapien auctor ullamcorper ac sit amet risus. Cras non luctus lacus. Cras nec ex eu nisl maximus dapibus. Nam vel cursus nunc, eget cursus velit. Praesent pellentesque dolor vitae auctor faucibus. Sed ac pulvinar odio, ac tincidunt augue. Ut vitae laoreet tellus."
            />
            <HeroBackgroundChange />
        </main>
    )
}

export default Main