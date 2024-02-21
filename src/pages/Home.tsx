import NewTodo from "../components/NewTodo";
import Layout from "../layouts";


export default function Home() {
  return (
    <>
      <Layout>
        <div class="mt-8 max-w-sm mx-auto">
          <NewTodo />
        </div>
      </Layout>
    </>
  );
}
