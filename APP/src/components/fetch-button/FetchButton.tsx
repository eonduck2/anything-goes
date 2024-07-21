import { component$, useStore, $ } from "@builder.io/qwik";

export const FetchButton = component$(() => {
  const state = useStore({ data: null, loading: false });

  const fetchData = $(async () => {
    // $로 래핑된 함수
    state.loading = true;
    try {
      const response = await fetch("http://localhost:4000/your-endpoint");
      const data = await response.json();
      state.data = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      state.loading = false;
    }
  });

  return (
    <div>
      <button onClick$={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
    </div>
  );
});
