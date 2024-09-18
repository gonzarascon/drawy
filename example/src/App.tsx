import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createDrawy } from "drawy";

const SettingsPanel: React.FC = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Settings</h2>
			<p className="text-gray-700">
				Adjust your preferences and settings here.
			</p>
		</div>
	);
};

const ProfilePanel: React.FC = () => {
	const { open } = useDrawy();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Profile</h2>
			<p className="text-gray-700 mb-4">
				View and edit your profile information.
			</p>
			<button
				type="button"
				onClick={() => open("settings")}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Open Settings Panel
			</button>
		</div>
	);
};

const ExampleBasic: React.FC = () => {
	const { open } = useDrawy();

	return (
		<div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
			<h3 className="text-xl font-bold mb-4 text-gray-800">Basic Panel</h3>
			<p className="text-gray-600 mb-4">
				Click the button to open a side panel.
			</p>
			<button
				type="button"
				onClick={() => open("profile")}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Open Settings Panel
			</button>
		</div>
	);
};

const NotificationsPanel: React.FC = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Notifications</h2>
			<p className="text-gray-700">Manage your notification preferences.</p>
		</div>
	);
};

const panels = {
	settings: <SettingsPanel />,
	profile: <ProfilePanel />,
	notifications: <NotificationsPanel />,
};

const { DrawyProvider, useDrawy } = createDrawy(panels);

function App() {
	return (
		<DrawyProvider>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<ExampleBasic />
		</DrawyProvider>
	);
}

export default App;
