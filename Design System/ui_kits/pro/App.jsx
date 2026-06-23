// App.jsx — Pro page assembled.

const App = () => (
    <React.Fragment>
        <Nav isPro={true} />
        <div className="products-pro">
            <ProHeader />
            <div className="content">
                <IntroSection />
                <OptionsSection />
                <TargetAudience />
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
