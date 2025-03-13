const Card = ({ children }) => (
          <div className="shadow-lg rounded-lg overflow-hidden bg-white">{children}</div>
        );
        
        const CardContent = ({ children }) => (
          <div className="p-4">{children}</div>
        );
        
        export { Card, CardContent };
        