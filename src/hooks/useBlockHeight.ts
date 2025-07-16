import { useEffect, useState } from 'react';

interface BlockHeaderResponse {
  header: {
    hash: string;
    version: number;
    prevBlockHash: string;
    merkleRoot: string;
    creationTimestamp: number;
    difficultyTarget: number;
    nonce: number;
    work: number;
  };
  state: string;
  chainWork: number;
  height: number;
}

export function useBlockHeight() {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        const response = await fetch('https://block-headers-service-production.up.railway.app/api/v1/chain/tip/longest', {
          headers: {
            'accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch block height');
        }
        
        const data: BlockHeaderResponse = await response.json();
        setBlockHeight(data.height);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback to a reasonable default
        setBlockHeight(905825);
      } finally {
        setLoading(false);
      }
    };

    fetchBlockHeight();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchBlockHeight, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return { blockHeight, loading, error };
}