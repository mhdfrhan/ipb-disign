import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardFooter from "./DashboardFooter";
import Head from "next/head";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar title={title} />
			<Sidebar />
			<main className="lg:ml-64 px-5 lg:px-14">{children}</main>
			<DashboardFooter />
		</>
	);
};

export default Layout;
