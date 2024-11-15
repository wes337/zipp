import { getAllPolicies } from "@/lib/graphql";
import { toCamelCase } from "@/utils";
import TopBar from "@/components/top-bar";
import styles from "@/styles/policy.module.scss";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Policy({ params }) {
  const policyName = toCamelCase(params.policy);
  const policies = await getAllPolicies();
  const policy = policies[policyName];

  if (!policy) {
    return (
      <div className={styles.policy}>
        <TopBar />
        <h1 className={styles.title}>404</h1>
        <div className={styles.content} style={{ textAlign: "center" }}>
          This page could not be found.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.policy}>
      <TopBar />
      <h1 className={styles.title}>{policy.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: policy.body }}
      />
    </div>
  );
}
