import { BaseLayout } from "../layouts/BaseLayout"
import { Postcard } from "../components/PostCard";

export const Home = () => {
    return (
        <BaseLayout>
            <div className='post-grid'>
                <Postcard post={{
                    title: "Hello World",
                    description: " lorem  ",
                    id: 1
                }} />
                <Postcard post={{
                    title: "Hello World",
                    // description: " lorem  ",
                    id: 2
                }} />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
            </div>
        </BaseLayout>
    )
}