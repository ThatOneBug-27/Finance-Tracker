export default function User({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
}
