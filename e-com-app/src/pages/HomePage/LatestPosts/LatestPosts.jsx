import { Title } from "../ProductSections/Title";
import styles from "./LatestPosts.module.scss";
// import { Posts } from "./Posts";
import { Post } from "./Post";

const postsDATA = [
    {
        imageURL: "./postImg/post1.png",
        text1: "feb 22, 2023 - Gadgets",
        text2: "Get some cool gadgets in 2023",
        id: 1,
    },
    {
        imageURL: "./postImg/post2.png",
        text1: "feb 22, 2023  -  technology",
        text2: "TECHNOLOGY HACK YOU WON’T GET",
        id: 2,
    },
    {
        imageURL: "./postImg/post3.png",
        text1: "feb 22, 2023  -  camera",
        text2: "toP 10 SMALL cAMERA IN THE WORLD",
        id: 3,
    },
];

export const LatestPosts = () => {
    return (
        <div className={styles.container}>
            <Title nameOfTitle="latest post" buttonText="Read blogs" />
            <div className={styles.posts}>
                {postsDATA.map((post) => (
                    <Post
                        key={post.id}
                        text1={post.text1}
                        text2={post.text2}
                        imageURL={post.imageURL}
                    />
                ))}
            </div>
        </div>
    );
};
