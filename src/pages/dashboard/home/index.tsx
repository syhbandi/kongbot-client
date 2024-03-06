import BreadCrumb from "@components/dashboard/BreadCrumb";

const Page = () => {
  return (
    <>
      <BreadCrumb
        title="Dashboard"
        breadcrumb={[{ title: "Home", href: "/dashboard", active: true }]}
      />
    </>
  );
};

export default Page;
