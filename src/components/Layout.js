import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import DashboardFooter from "./DashboardFooter";

const Layout = ({ title, children }) => {
	return (
		<>
			<Navbar title={title} />
			<Sidebar />
			<main className="lg:ml-64 px-5 lg:px-14">{children}</main>
			<DashboardFooter />
		</>
	);
};

export default Layout;
