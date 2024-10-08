import { fetchPageByPermalink } from '@/lib/fetchPageByPermalink';
import { fetchDocumentationCards } from '@/lib/fetchDocumentation';
import { fetchMilestones } from '@/lib/fetchMilestones';
import fetchPoweredBy from '@/lib/fetchPoweredBy'; // Import the fetch function
import DocumentationCards from '@/components/DocumentationCards';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import styles from '@/styles/DevsPage.module.css';

const DevsPage = async () => {
  const pageData = await fetchPageByPermalink('/devs');
  const documentationCards = await fetchDocumentationCards();
  const milestones = await fetchMilestones();
  const { poweredByData, poweredByLogos } = await fetchPoweredBy(); // Fetch the powered by data
  const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

  if (!pageData) {
    return <div>No page data found</div>;
  }

  const backgroundImageUrl = `${baseUrl}/assets/${pageData.background}`;
  const descriptionHTML = { __html: pageData.description };

  return (
    <>
      <div
        className={styles.fullscreenBackground}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>{pageData.title}</h1>
        <div className={styles.description} dangerouslySetInnerHTML={descriptionHTML}></div>
        <DocumentationCards cards={documentationCards} />
        <div className={styles.separatorLine}></div>
        {/* Insert the Milestones title */}
        <h2 className={styles.title}>{poweredByData[0].milestones}</h2>
        <MilestoneTimeline milestones={milestones} />
      </div>
    </>
  );
};

export default DevsPage;