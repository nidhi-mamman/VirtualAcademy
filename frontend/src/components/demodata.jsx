// Demodata.jsx
import React, { useEffect, useState } from 'react';

const Demodata = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [query, setQuery]       = useState('');
  const [filterDate, setFilterDate] = useState('');

  const fetchRequests = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:9000/get-demo-requests', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      const data = await res.json();
      if (data?.statuscode === 1 && Array.isArray(data.data)) {
        setRequests(data.data);
      } else {
        setRequests([]);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load demo requests. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Apply text search & optional date filter
  const filtered = requests.filter((r) => {
    const q = query.toLowerCase();
    const matchesQuery =
      (r?.fullName || '').toLowerCase().includes(q) ||
      (r?.email || '').toLowerCase().includes(q) ||
      (r?.location || '').toLowerCase().includes(q) ||
      (r?.course || '').toLowerCase().includes(q) ||
      (r?.mobile || '').toLowerCase().includes(q);

    if (!filterDate) return matchesQuery;

    const requestDate = r?.createdAt
      ? new Date(r.createdAt).toISOString().slice(0, 10)
      : '';
    return matchesQuery && requestDate === filterDate;
  });

  return (
    <div className="container my-5">
      {/* Header + Tools (same structure style as Showcontact) */}
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div className="mb-3 mb-md-0">
          <h1 className="h4 mb-1">Demo Requests</h1>
          <div className="text-muted small">
            {loading ? 'Loading...' : `${filtered.length} of ${requests.length} shown`}
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search name, email, course, phone, location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ minWidth: 260 }}
          />
          <input
            type="date"
            className="form-control"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          {filterDate && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setFilterDate('')}
            >
              Clear Date
            </button>
          )}
          <button className="btn btn-outline-secondary" onClick={fetchRequests}>
            Refresh
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-hidden="true"></div>
          <span className="ms-2">Loading...</span>
        </div>
      ) : /* Empty */ filtered.length === 0 ? (
        <div className="text-center text-muted py-5 border rounded">
          {filterDate ? 'No requests found for the selected date.' : 'No demo requests found.'}
        </div>
      ) : (
        /* Table */
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th style={{ width: 56 }}>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Course</th>
                <th>Mobile</th>
                <th style={{ width: 180 }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r?._id || i}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{r?.fullName || '-'}</td>
                  <td>
                    {r?.email ? (
                      <a href={`mailto:${r.email}`} className="text-decoration-none">
                        {r.email}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="text-muted">{r?.location || '-'}</td>
                  <td>
                    <span className="badge bg-light text-dark border" title={r?.course || ''}>
                      {r?.course || '-'}
                    </span>
                  </td>
                  <td>
                    {r?.mobile ? (
                      <a href={`tel:${r.mobile}`} className="text-decoration-none">
                        {r.mobile}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="text-muted small">
                    {r?.createdAt
                      ? new Date(r.createdAt).toLocaleString()
                      : r?.updatedAt
                      ? new Date(r.updatedAt).toLocaleString()
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Demodata;
