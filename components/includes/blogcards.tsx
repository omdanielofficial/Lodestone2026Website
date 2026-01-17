import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => (
  <Link
    href={link}
    className="group relative block transform overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
  >
    <Image
      src={imageUrl}
      alt={title}
      width={1920}
      height={0}
      className="object-cover transition-opacity duration-300 group-hover:opacity-75"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-50 p-4 text-white transition-opacity duration-300 group-hover:bg-opacity-75">
      <span className="text-lg font-bold">{title}</span>
      <p className="mt-1">{description}</p>
    </div>
  </Link>
);

const BlogCards: React.FC = () => {
  const blogPosts = [
    {
      title: "Installing Minecraft modpacks",
      description: "How to modify your game by adding new items...",
      imageUrl: "/assets/images/blog/1.jpg",
      link: "https://intranex.gitbook.io/lodestone-docs/game-panel/using-the-modpack-manager",
    },
    {
      title: "Get started with a Hytale server",
      description: "How to customise and connect to a Hytale server...",
      imageUrl: "/assets/images/blog/2.jpg",
      link: "https://intranex.gitbook.io/lodestone-docs/hytale/getting-started-with-a-hytale-server",
    },
    {
      title: "Set up the Dynmap plugin",
      description: "Configure a web-based world map of your server...",
      imageUrl: "/assets/images/blog/3.png",
      link: "https://lodestone-technologies.gitbook.io/knowledgebase/minecraft-java/configure-dynmap",
    },
  ];

  return (
    <div className="overflow-hidden bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(({ title, description, imageUrl, link }, index) => (
            <BlogCard
              key={index}
              title={title}
              description={description}
              imageUrl={imageUrl}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
