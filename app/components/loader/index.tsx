import "@/app/components/loader/styles.css"

function Loader() {
  return (
    <div className="loader">
      Loading
      <span className="dot one">.</span>
      <span className="dot two">.</span>
      <span className="dot three">.</span>
    </div>
  );
}

export default Loader;
