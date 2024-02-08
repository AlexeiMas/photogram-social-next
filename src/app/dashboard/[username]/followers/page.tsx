import { IDynamicPageParams } from '@/types/general';
import { fetchProfile } from '@/lib/data';
import FollowersModal from '@/components/Follower/FollowersModal';

async function FollowersPage({ params: { username } }: IDynamicPageParams<{ username: string }>) {
  const profile = await fetchProfile(username);
  const followers = profile?.followedBy;

  return <FollowersModal followers={followers} username={username} />;
}

export default FollowersPage;
