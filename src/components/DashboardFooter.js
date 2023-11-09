const DashboardFooter = () => {
	return (
		<footer className="flex flex-wrap items-center justify-between text-sm text-neutral-400 mt-14 lg:ml-64 lg:px-14 px-5 pb-10">
			<div>
				© {new Date().getFullYear()} - IPB University
			</div>
			<div>
				All Rights Reserved
			</div>
		</footer>
	);
}

export default DashboardFooter;