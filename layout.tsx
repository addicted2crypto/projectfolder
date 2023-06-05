import './globals.css'








export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <div className="flex">
        {/*Sidebar*/}

        {/* ClientProvider?== Notifications */}

       <div className="bg-[#343451] flex-1"> {children} </div> 
        </div>
        </body>
    </html>
  );
}
