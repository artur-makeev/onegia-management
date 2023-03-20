import { LoginForm } from '@/modules/Authorization';
import { useAuthStore } from '@/modules/Authorization/store/AuthStore';
import { ComandPanel } from '@/modules/ComandPanel';
import { Navbar } from '@/modules/Layout';
import { Spinner } from '@/ui';

export default function HomePage() {
	const authStore = useAuthStore();

	if (authStore.loading) {
		return <Spinner />;
	}

	if (!authStore.isAuth) {
		return <LoginForm />;
	}

	return (
		<>
			<Navbar />
			<ComandPanel />
		</>
	);
}
