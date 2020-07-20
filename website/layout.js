const Layout = props => {
  console.log("tracker", process.env.NEXT_PUBLIC_JS_TRACKER);
  return (
    <div style={{ border: "3px solid red" }}>
      {props.children}

      <div
        dangerouslySetInnerHTML={{__html: process.env.NEXT_PUBLIC_JS_TRACKER || ""}}
        style={{ display: "none" }}
      ></div>
    </div>
  );
};

export default Layout;
