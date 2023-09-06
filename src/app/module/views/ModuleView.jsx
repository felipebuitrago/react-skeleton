
import { Outlet } from 'react-router-dom';
import { ModuleLayout } from '../layout/ModuleLayout';

export const ModuleView = () => {
	return (
		<ModuleLayout>

			<Outlet />

		</ModuleLayout>
	)
};