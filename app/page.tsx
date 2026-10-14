export default function Home() {
  const stats = [
    { label: "Total Customers", value: "1,284", change: "+12.8%" },
    { label: "Total Orders", value: "3,642", change: "+8.2%" },
    { label: "Revenue", value: "₹8,42,500", change: "+14.6%" },
    { label: "Pending Orders", value: "24", change: "Needs attention" }
  ];

  const orders = [
    { id: "#SF-1001", customer: "Aarav Sharma", total: "₹2,499", status: "Processing" },
    { id: "#SF-1002", customer: "Priya Patel", total: "₹1,850", status: "Completed" },
    { id: "#SF-1003", customer: "Rahul Verma", total: "₹3,299", status: "Pending" },
    { id: "#SF-1004", customer: "Ananya Singh", total: "₹999", status: "Completed" },
    { id: "#SF-1005", customer: "Ishaan Mehta", total: "₹4,500", status: "Processing" }
  ];

  return (
    <main className="layout">
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon">S</span> ShopFlow</div>
        <p className="nav-label">WORKSPACE</p>
        <a className="nav-item active" href="#overview">▦ &nbsp; Overview</a>
        <a className="nav-item" href="#customers">♙ &nbsp; Customers</a>
        <a className="nav-item" href="#orders">▤ &nbsp; Orders</a>
        <a className="nav-item" href="#workflows">⟳ &nbsp; Workflows</a>
        <a className="nav-item" href="#communications">✉ &nbsp; Communications</a>
        <div className="sidebar-bottom">
          <p className="nav-label">STORE CONNECTION</p>
          <div className="connection"><span className="dot" /> WooCommerce<br /><small>Demo mode</small></div>
          <div className="profile"><div className="avatar">A</div><div>Admin User<br /><small>Store administrator</small></div></div>
        </div>
      </aside>

      <section className="content" id="overview">
        <header className="topbar">
          <div><span className="muted">Workspace /</span> Overview</div>
          <div className="top-actions"><span className="demo-badge">● Demo data</span><button className="button">+ Add customer</button></div>
        </header>

        <section className="welcome">
          <div><p className="eyebrow">WEDNESDAY, OCTOBER 14</p><h1>Good afternoon 👋</h1><p className="muted">Here's what's happening with your store today.</p></div>
          <div className="date-card">▦ &nbsp; Last 30 days⌄</div>
        </section>

        <section className="stats">
          {stats.map((stat) => <article className="stat-card" key={stat.label}><p>{stat.label}</p><h2>{stat.value}</h2><span className="growth">{stat.change}</span></article>)}
        </section>

        <section className="panel" id="orders">
          <div className="panel-heading"><div><h2>Recent orders</h2><p className="muted">A quick look at your latest store activity.</p></div><a href="#all-orders">View all orders →</a></div>
          <div className="table-wrap"><table><thead><tr><th>ORDER</th><th>CUSTOMER</th><th>TOTAL</th><th>STATUS</th></tr></thead><tbody>
            {orders.map((order) => <tr key={order.id}><td className="order-id">{order.id}</td><td>{order.customer}</td><td>{order.total}</td><td><span className={"status " + order.status.toLowerCase()}>{order.status}</span></td></tr>)}
          </tbody></table></div>
        </section>

        <section className="lower-grid">
          <article className="panel" id="workflows"><div className="panel-heading"><div><h2>Automation overview</h2><p className="muted">Your customer workflows</p></div><span>⟳</span></div><div className="workflow-row"><div className="workflow-icon">✉</div><div><strong>Welcome new customers</strong><p className="muted">Send a welcome email after signup</p></div><span className="enabled">Enabled</span></div><div className="workflow-row"><div className="workflow-icon">📦</div><div><strong>Order follow-up</strong><p className="muted">Follow up after delivery</p></div><span className="enabled">Enabled</span></div><div className="workflow-row"><div className="workflow-icon">🛒</div><div><strong>Abandoned cart</strong><p className="muted">Remind customers about their cart</p></div><span className="paused">Paused</span></div></article>
          <article className="panel" id="communications"><div className="panel-heading"><div><h2>AI assistant</h2><p className="muted">Your store insights</p></div><span>✦</span></div><div className="ai-card"><div className="ai-sparkle">✦</div><strong>How can I help your store today?</strong><p className="muted">Ask about orders, customers, or store performance.</p><div className="suggestion">Summarize this week's sales ↗</div><div className="suggestion">Find orders needing attention ↗</div><p className="ai-note">Preview only — AI actions aren't connected yet.</p></div></article>
        </section>

        <footer>ShopFlow CRM <span>Demo interface · WooCommerce not connected</span></footer>
      </section>
    </main>
  );
}
