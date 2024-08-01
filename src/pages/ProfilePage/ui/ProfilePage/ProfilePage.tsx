import { useParams } from "react-router-dom";
import { PageWrapper } from "@/widgets/PageWrapper";
import { EditableProfileCard } from "@/features/EditableProfileCard";

function ProfilePage() {
  const { id: userId } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <EditableProfileCard userId={userId} />
    </PageWrapper>
  );
}

export default ProfilePage;
