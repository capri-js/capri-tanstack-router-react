import { routeConfig } from "../routes.generated/index";
import logo from "../logo.svg";
import { A } from "../components/Link";
import { useRouter } from "@tanstack/react-router";

routeConfig.generate({
  component: Home,
});

function Home() {
  const { Link } = useRouter();
  return (
    <div className="mx-auto my-10 max-w-md flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Capri" />
        <div className="text-4xl font-extrabold text-pink-600">+</div>
        <div className="text-4xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-teal-500">
          TanStack Router
        </div>
      </div>
      <p>
        This is an example of how to build a static website with{" "}
        <A href="https://capri.build">Capri</A> and{" "}
        <A href="https://tanstack.com/router/">TanStack Router</A>.
      </p>
      <h2 className="text-xl font-bold text-teal-600">Features</h2>
      <ul>
        <li>📁 Type-safe, file-system-based router</li>
        <li>🍃 Zero KB of JavaScript shipped to the client</li>
        <li>
          🏝️ Pages with interactive{" "}
          <A as={Link} to="/islands" search={{}} params={{}}>
            islands
          </A>
          <Link to="/posts/$postId" params={{ postId: "10" }}>
            islands
          </Link>
        </li>
        <li>
          💨 Styled with Tailwind &{" "}
          <A href="https://github.com/fgnass/classname-variants">
            classname-variants
          </A>
        </li>
        <li></li>
      </ul>
      <a href="https://stackblitz.com/github/github/capri-js/capri-tanstack-router-react?terminal=start">
        <img
          alt="Open in StackBlitz"
          src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
        />
      </a>
      <p>
        Or visit <A href="https://capri.build">capri.build</A> for more details.
      </p>
    </div>
  );
}
