import { IDynamicPageParams } from '@/types/general';
import { fetchProfile } from '@/lib/data';
import FollowingModal from '@/components/Following/FollowingModal';

async function FollowingPage({ params: { username } }: IDynamicPageParams<{ username: string }>) {
  const profile = await fetchProfile(username);
  const following = profile?.following;

  return <FollowingModal following={following} username={username} />;
}

export default FollowingPage;
