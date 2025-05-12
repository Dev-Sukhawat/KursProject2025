export default function Membership() {
  return (
    <section className="Membership-box flex items-center p-2 bg-blue-100 rounded mb-4">
      <input type="checkbox" className="mr-2" />
      <p className="text-sm">
        Become a <strong>MetalMorph Member</strong> to get{" "}
        <strong className="text-red-500">25%</strong>{" "}
        <strong>Discount on your Purchase</strong>
      </p>
    </section>
  );
}
